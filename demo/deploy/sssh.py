#!/usr/bin/env python
import sys
from subprocess import call
from ansible.errors import AnsibleError
from ansible.inventory import Inventory


if __name__ == '__main__':
    try:
        if len(sys.argv) < 2:
            sys.stderr.write('provide host!')
            sys.exit(2)

        arg_host = sys.argv[1]

        places = (
            '.',
            'deploy',
            'deployment'
        )

        inventory = None
        for place in places:
            kwargs = dict(host_list='{}/hosts'.format(place)) if place else {}
            try:
                inventory = Inventory(**kwargs)
                break
            except AnsibleError:
                pass

        if not inventory:
            tpl = 'could not find a valid host file! looked in: <current directory>, {}'
            sys.stderr.write(tpl.format(', '.join(filter(None, places))))
            sys.exit(2)

        sys.stdout.write('hosts file found in `{}` directory\n'.format(place or 'current'))

        host = inventory.get_host(arg_host)

        if not host:
            sys.stderr.write('host `{}` not found!'.format(arg_host))
            sys.exit(2)

        args = [
            'ssh',
            '-p', str(host.vars['ansible_ssh_port']),
            '{ansible_ssh_user}@{ansible_ssh_host}'.format(**host.vars)
        ]

        sys.stdout.write('Connecting to: {}\n'.format(' '.join(args)))
        call(args)

    except AnsibleError as e:
        sys.stderr.write('Ansible says: `{}`'.format(e))
        sys.exit(2)
    except Exception as e:
        sys.stderr.write('opsss... something wrong happened! Error type: `{}` - Error message `{}`'.format(type(e), e))
        sys.exit(2)

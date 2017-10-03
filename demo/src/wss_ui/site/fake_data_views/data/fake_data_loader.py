import os
import json

CURRENT_DIR = os.path.dirname(__file__)


def get_fake_date(fake_data_name):
    filename = CURRENT_DIR + "/" + fake_data_name + ".json"
    with open(filename, 'r') as fake_data:
        result = json.load(fake_data)

    return result

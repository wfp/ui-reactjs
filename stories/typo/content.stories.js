import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import Blockquote from '../../src/components/blockquote';

storiesOf('Typo')
  	.add('Content',
    (() => {
	    return (
      <div>
      <h1>Headings</h1>
      <p>Headings are a useful tool to markup important sections of a given page, such as headlines, chapters, etc. Any heading elements may include links or anchors.</p>

      <h1>The quick brown fox jumps over the lazy dog.</h1>
      <h2>The quick brown fox jumps over the lazy dog.</h2>
      <h3>The quick brown fox jumps over the lazy dog.</h3>
      <h4>The quick brown fox jumps over the lazy dog.</h4>
      <h5>The quick brown fox jumps over the lazy dog.</h5>
      <h6>The quick brown fox jumps over the lazy dog.</h6>


      <h1>Links</h1>
      <p>Links are special elements that point reader to other places on the Web, therefore they have to stand out from other text. Use only meaningful text for your links; words such as “here”, “click here” don’t tell the reader where they lead.</p>

      <Blockquote>The Zero Hunger Challenge, launched by UN Secretary General Ban Ki-moon, encourages everyone - whether in government, business or civil society - to focus their energies on ending hunger in our lifetimes. By partnering with WFP and supporting its work, major global companies such as <a href="https://www.wfp.org/how-to-help/companies/partner/unilever">Unilever</a>, <a href="https://www.wfp.org/partners/private-sector/meet-our-partners/dsm">DSM</a> and <a href="https://www.wfp.org/about/partners/companies/meet-our-partners/mastercard">MasterCard</a> have already started to do this, joining with <a href="https://www.wfp.org/partners/governments"></a>governments and civil society in the quest for zero hunger.</Blockquote>


      </div>
		)
	}
    )
  )
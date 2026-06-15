import type { Preview } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { SharedModule } from '../src/app/shared/shared-module';

const preview: Preview = {
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        RouterModule,
        SharedModule,
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        {
          provide: MatDialogRef,
          useValue: {
            close: () => {},
            backdropClick: () => new Subject<void>(),
            keydownEvents: () => new Subject<void>(),
          },
        },
      ],
    }),
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'aria-props', enabled: true },
          { id: 'aria-valid-attr', enabled: true },
          { id: 'color-contrast', enabled: true },
          { id: 'button-name', enabled: true },
          { id: 'label', enabled: true },
          { id: 'link-name', enabled: true },
        ],
      },
      options: {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'],
        },
      },
    },
  },
};

export default preview;
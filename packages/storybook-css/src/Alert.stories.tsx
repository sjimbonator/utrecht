/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import {
  Button,
  ButtonGroup,
  Link,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/src/css-module';
import readme from '@utrecht/components/alert/README.md?raw';
import alertActions from '@utrecht/components/alert/_alert-actions.md?raw';
import tokensDefinition from '@utrecht/components/alert/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { Alert } from './Alert';
import { Heading2 } from './Heading2';
import { Paragraph } from './Paragraph';
import { designTokenStory } from './design-token-story';
import '@utrecht/components/alert/css/index.scss';

const meta = {
  title: 'CSS Component/Alert',
  id: 'css-alert',
  component: Alert,
  argTypes: {
    children: {
      description: 'HTML content of the alert',
    },
    type: {
      description: 'Type',
      control: { type: 'select' },
      options: ['', 'error', 'info', 'ok', 'warning'],
    },
  },
  args: {
    children: [
      <Heading2>Lorem ipsum</Heading2>,
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>,
    ],
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokensPrefix: 'utrecht-alert',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Info: Story = {
  args: {
    type: 'info',
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
};

export const OK: Story = {
  args: {
    type: 'ok',
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
};

export const Error: Story = {
  args: {
    type: 'error',
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
};

export const CallToActionLinks: Story = {
  parameters: {
    docs: {
      description: {
        story: `De link-teksten in dit voorbeeld zijn speciaal zo geschreven dat het ook duidelijke instructies zijn wanneer je niet weet dat het links zijn.

Als je de link-teksten goed schrijft dan is de alert ook duidelijk wanneer een _screen reader_ de alert aankondigt.`,
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  args: {
    type: 'error',
    children: (
      <>
        <Heading2>Probleem met ingevulde gegevens</Heading2>
        <UnorderedList>
          <UnorderedListItem>
            <Link href="#given-name">Vul je voornaam in.</Link>
          </UnorderedListItem>
          <UnorderedListItem>
            <Link href="#postal-code">Vul een postcode in, bijvoorbeeld: 1011 AB.</Link>
          </UnorderedListItem>
        </UnorderedList>
      </>
    ),
  },
};

export const ActionsWarning: Story = {
  parameters: {
    docs: {
      description: {
        story: alertActions,
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  args: {
    type: 'warning',
    children: (
      <Paragraph>
        De sessie is afgelopen, omdat je 15 minuten niets hebt gedaan. Je kan weer opnieuw beginnen.
      </Paragraph>
    ),
    actions: (
      <ButtonGroup>
        <Button appearance="primary-action-button">Opnieuw beginnen</Button>
      </ButtonGroup>
    ),
  },
};

export const DesignTokens = designTokenStory(meta);

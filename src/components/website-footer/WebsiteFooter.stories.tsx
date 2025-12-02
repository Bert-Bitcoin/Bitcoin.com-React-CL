import type { Meta, StoryObj } from '@storybook/react';

import { WebsiteFooter } from './WebsiteFooter';
import type { WebsiteFooterLinkGroup } from './WebsiteFooter.types';

const sampleLinkGroups: WebsiteFooterLinkGroup[] = [
  {
    heading: 'Company',
    links: [
      { label: 'About', href: 'https://www.bitcoin.com/about-us/' },
      { label: 'Careers', href: 'https://www.bitcoin.com/careers/' },
      { label: 'Advertise', href: 'https://www.bitcoin.com/advertise/' },
      { label: 'Legal', href: 'https://www.bitcoin.com/legal/user-agreement/' },
      { label: 'Contact', href: 'https://www.bitcoin.com/contact-us/' }
    ]
  },
  {
    heading: 'Insights',
    links: [
      { label: 'News', href: 'https://news.bitcoin.com/' },
      { label: 'Markets', href: 'https://markets.bitcoin.com/' },
      { label: 'Learning Center', href: 'https://www.bitcoin.com/get-started/' },
      { label: 'Expert Reviews', href: 'https://www.bitcoin.com/directory/' }
    ]
  },
  {
    heading: 'Products & Services',
    links: [
      { label: 'Bitcoin.com Account', href: 'https://accounts.bitcoin.com/' },
      { label: 'Wallet', href: 'https://wallet.bitcoin.com/' },
      { label: 'Buy Bitcoin', href: 'https://buy.bitcoin.com/' },
      { label: 'Verse DEX', href: 'https://verse.bitcoin.com/' }
    ]
  },
  {
    heading: 'Reviews',
    links: [
      { label: 'Exchanges', href: 'https://www.bitcoin.com/exchanges/' },
      { label: 'Wallets', href: 'https://www.bitcoin.com/wallet/' }
    ]
  },
  {
    heading: 'Follow',
    links: [
      { label: 'Telegram', href: 'https://t.me/GetVerse/1/', isExternal: true },
      { label: 'X', href: 'https://x.com/bitcoincom/', isExternal: true },
      { label: 'Discord', href: 'https://discord.com/invite/bitcoin-com/', isExternal: true },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/bitcoin.com/', isExternal: true }
    ]
  }
];

const meta: Meta<typeof WebsiteFooter> = {
  title: 'Components/Navigation/Website Footer',
  component: WebsiteFooter,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'Night',
      values: [
        { name: 'Night', value: '#1c1c1c' },
        { name: 'Canvas', value: '#f9f9fb' }
      ]
    }
  }
};

export default meta;
type Story = StoryObj<typeof WebsiteFooter>;

export const Desktop: Story = {
  args: {
    linkGroups: sampleLinkGroups
  }
};

export const Tablet: Story = {
  args: {
    linkGroups: sampleLinkGroups
  },
  parameters: {
    viewport: {
      defaultViewport: 'ipad'
    }
  }
};

export const Mobile: Story = {
  args: {
    linkGroups: sampleLinkGroups
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
};

export const WithoutDownloadSection: Story = {
  args: {
    showDownloadSection: false,
    linkGroups: sampleLinkGroups
  }
};

export const WithoutDownloadSectionTablet: Story = {
  args: {
    showDownloadSection: false,
    linkGroups: sampleLinkGroups
  },
  parameters: {
    viewport: {
      defaultViewport: 'ipad'
    }
  }
};

export const WithoutDownloadSectionMobile: Story = {
  args: {
    showDownloadSection: false,
    linkGroups: sampleLinkGroups
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
};

export const WithFewerLinkGroups: Story = {
  args: {
    linkGroups: [
      {
        heading: 'Company',
        links: [
          { label: 'About', href: 'https://www.bitcoin.com/about-us/' },
          { label: 'Contact', href: 'https://www.bitcoin.com/contact-us/' },
          { label: 'Legal', href: 'https://www.bitcoin.com/legal/user-agreement/' }
        ]
      },
      {
        heading: 'Products',
        links: [
          { label: 'Bitcoin.com Wallet', href: 'https://wallet.bitcoin.com/' },
          { label: 'Buy Bitcoin', href: 'https://buy.bitcoin.com/' }
        ]
      },
      {
        heading: 'Follow',
        links: [
          { label: 'X', href: 'https://x.com/bitcoincom/', isExternal: true },
          { label: 'Discord', href: 'https://discord.com/invite/bitcoin-com/', isExternal: true }
        ]
      }
    ]
  }
};



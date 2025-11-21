import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Pagination } from './Pagination';

const meta = {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A pagination component for navigating through pages of content. Based on the Bitcoin.com design system.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1 },
      description: 'Current active page (1-indexed)'
    },
    totalPages: {
      control: { type: 'number', min: 1 },
      description: 'Total number of pages'
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'small']
    },
    maxPageButtons: {
      control: { type: 'number', min: 3 },
      description: 'Maximum number of page buttons to show'
    },
    showArrows: {
      control: { type: 'boolean' },
      description: 'Whether to show previous/next arrow buttons'
    }
  }
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default pagination with 6 pages
 */
export const Default: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
      <Pagination
        currentPage={currentPage}
        totalPages={6}
        onPageChange={setCurrentPage}
      />
    );
  }
};

/**
 * Small size variant
 */
export const Small: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
      <Pagination
        currentPage={currentPage}
        totalPages={6}
        onPageChange={setCurrentPage}
        size="small"
      />
    );
  }
};

/**
 * Many pages with pagination ellipsis
 */
export const ManyPages: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(5);

    return (
      <Pagination
        currentPage={currentPage}
        totalPages={20}
        onPageChange={setCurrentPage}
      />
    );
  }
};

/**
 * Starting at first page
 */
export const FirstPage: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
      <Pagination
        currentPage={currentPage}
        totalPages={10}
        onPageChange={setCurrentPage}
      />
    );
  }
};

/**
 * At the last page
 */
export const LastPage: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(10);

    return (
      <Pagination
        currentPage={currentPage}
        totalPages={10}
        onPageChange={setCurrentPage}
      />
    );
  }
};

/**
 * Without arrow buttons
 */
export const WithoutArrows: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(3);

    return (
      <Pagination
        currentPage={currentPage}
        totalPages={6}
        onPageChange={setCurrentPage}
        showArrows={false}
      />
    );
  }
};

/**
 * Custom max page buttons (5)
 */
export const CustomMaxButtons: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(5);

    return (
      <Pagination
        currentPage={currentPage}
        totalPages={15}
        onPageChange={setCurrentPage}
        maxPageButtons={5}
      />
    );
  }
};

/**
 * Few pages (3)
 */
export const FewPages: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(2);

    return (
      <Pagination
        currentPage={currentPage}
        totalPages={3}
        onPageChange={setCurrentPage}
      />
    );
  }
};

/**
 * Single page (no navigation needed)
 */
export const SinglePage: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
      <Pagination
        currentPage={currentPage}
        totalPages={1}
        onPageChange={setCurrentPage}
      />
    );
  }
};

/**
 * Interactive example with content
 */
export const WithContent: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;

    return (
      <div className="flex flex-col gap-l">
        <div className="bg-shades-off-white border border-shades-light rounded-s p-l min-w-[400px]">
          <h3 className="text-heading-md mb-m">Page {currentPage}</h3>
          <p className="text-label text-shades-dark">
            This is the content for page {currentPage} of {totalPages}.
          </p>
        </div>
        <div className="flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    );
  }
};

/**
 * Dark mode support
 */
export const DarkMode: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(3);

    return (
      <div className="dark bg-shades-black p-l rounded-m" data-theme="dark">
        <Pagination
          currentPage={currentPage}
          totalPages={6}
          onPageChange={setCurrentPage}
        />
      </div>
    );
  }
};

/**
 * Small dark mode
 */
export const SmallDarkMode: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(3);

    return (
      <div className="dark bg-shades-black p-l rounded-m" data-theme="dark">
        <Pagination
          currentPage={currentPage}
          totalPages={6}
          onPageChange={setCurrentPage}
          size="small"
        />
      </div>
    );
  }
};


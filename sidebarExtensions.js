// @ts-check
/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

 module.exports = {
  docs: [
    'introduction/introduction',
    {
      type: 'category',
      label: 'aoi.music',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'aoi.music',
          link: {
            type: 'doc', id: 'aoi.music'
          },
          items: [],
        },
        {
          type: 'category',
          label: 'Functions',
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'aoi.music/functions',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'aoi.panel',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'aoi.panel',
        },
      ],
    },
  ],
};
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Programing_classes/__docusaurus/debug',
    component: ComponentCreator('/Programing_classes/__docusaurus/debug', '917'),
    exact: true
  },
  {
    path: '/Programing_classes/__docusaurus/debug/config',
    component: ComponentCreator('/Programing_classes/__docusaurus/debug/config', '83d'),
    exact: true
  },
  {
    path: '/Programing_classes/__docusaurus/debug/content',
    component: ComponentCreator('/Programing_classes/__docusaurus/debug/content', '047'),
    exact: true
  },
  {
    path: '/Programing_classes/__docusaurus/debug/globalData',
    component: ComponentCreator('/Programing_classes/__docusaurus/debug/globalData', 'cb6'),
    exact: true
  },
  {
    path: '/Programing_classes/__docusaurus/debug/metadata',
    component: ComponentCreator('/Programing_classes/__docusaurus/debug/metadata', '528'),
    exact: true
  },
  {
    path: '/Programing_classes/__docusaurus/debug/registry',
    component: ComponentCreator('/Programing_classes/__docusaurus/debug/registry', '5d8'),
    exact: true
  },
  {
    path: '/Programing_classes/__docusaurus/debug/routes',
    component: ComponentCreator('/Programing_classes/__docusaurus/debug/routes', 'd31'),
    exact: true
  },
  {
    path: '/Programing_classes/markdown-page',
    component: ComponentCreator('/Programing_classes/markdown-page', '0b6'),
    exact: true
  },
  {
    path: '/Programing_classes/docs',
    component: ComponentCreator('/Programing_classes/docs', '162'),
    routes: [
      {
        path: '/Programing_classes/docs',
        component: ComponentCreator('/Programing_classes/docs', 'f0d'),
        routes: [
          {
            path: '/Programing_classes/docs',
            component: ComponentCreator('/Programing_classes/docs', '321'),
            routes: [
              {
                path: '/Programing_classes/docs/category/programming---basics',
                component: ComponentCreator('/Programing_classes/docs/category/programming---basics', 'db4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Programing_classes/docs/category/tutorial---extras',
                component: ComponentCreator('/Programing_classes/docs/category/tutorial---extras', 'c2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Programing_classes/docs/intro',
                component: ComponentCreator('/Programing_classes/docs/intro', '878'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Programing_classes/docs/programing-basics/congratulations',
                component: ComponentCreator('/Programing_classes/docs/programing-basics/congratulations', 'bbe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Programing_classes/docs/programing-basics/create-a-blog-post',
                component: ComponentCreator('/Programing_classes/docs/programing-basics/create-a-blog-post', 'ae1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Programing_classes/docs/programing-basics/create-a-document',
                component: ComponentCreator('/Programing_classes/docs/programing-basics/create-a-document', 'cfa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Programing_classes/docs/programing-basics/create-a-page',
                component: ComponentCreator('/Programing_classes/docs/programing-basics/create-a-page', 'd0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Programing_classes/docs/programing-basics/deploy-your-site',
                component: ComponentCreator('/Programing_classes/docs/programing-basics/deploy-your-site', '85c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Programing_classes/docs/programing-basics/markdown-features',
                component: ComponentCreator('/Programing_classes/docs/programing-basics/markdown-features', '2fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Programing_classes/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/Programing_classes/docs/tutorial-extras/manage-docs-versions', 'd19'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Programing_classes/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/Programing_classes/docs/tutorial-extras/translate-your-site', '9a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Programing_classes/',
    component: ComponentCreator('/Programing_classes/', '76b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

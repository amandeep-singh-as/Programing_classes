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
    component: ComponentCreator('/Programing_classes/docs', '762'),
    routes: [
      {
        path: '/Programing_classes/docs',
        component: ComponentCreator('/Programing_classes/docs', '16c'),
        routes: [
          {
            path: '/Programing_classes/docs',
            component: ComponentCreator('/Programing_classes/docs', '535'),
            routes: [
              {
                path: '/Programing_classes/docs/category/bonus-content',
                component: ComponentCreator('/Programing_classes/docs/category/bonus-content', '46d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Programing_classes/docs/category/programming---basics',
                component: ComponentCreator('/Programing_classes/docs/category/programming---basics', 'db4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Programing_classes/docs/extra/git',
                component: ComponentCreator('/Programing_classes/docs/extra/git', '4a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Programing_classes/docs/extra/github_pages',
                component: ComponentCreator('/Programing_classes/docs/extra/github_pages', '9e6'),
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
                path: '/Programing_classes/docs/programing-basics/Class 1 - April 7 2025',
                component: ComponentCreator('/Programing_classes/docs/programing-basics/Class 1 - April 7 2025', '63a'),
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

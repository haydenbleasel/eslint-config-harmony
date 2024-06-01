import plugin from 'eslint-plugin-yml';

const { rules } = plugin;

const availableKeys = Object.keys(rules).filter(
  (key) => !rules[key].meta.deprecated
);

const baseRules = Object.fromEntries(
  availableKeys.map((key) => [`yml/${key}`, 'error'])
);

const overrideRules = {
  'yml/sort-sequence-values': [
    'error',
    { pathPattern: '.*', order: { type: 'asc' } },
  ],
};

const config = Object.assign(baseRules, overrideRules);

export default config;

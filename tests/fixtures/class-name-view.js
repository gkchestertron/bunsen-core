module.exports = {
  cellDefinitions: {
    main: {
      children: [
        {
          extends: 'search'
        }
      ],
      classNames: {
        cell: 'facets'
      }
    },
    search: {
      children: [
        {
          classNames: {
            cell: 'test-class',
            label: 'label-test-class',
            value: 'input-test-class'
          },
          model: 'p'
        }
      ],
      label: 'Search'
    }
  },
  cells: [
    {
      extends: 'main'
    }
  ],
  type: 'form',
  version: '2.0'
}
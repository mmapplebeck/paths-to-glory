export function getPaths(nodeName) {
  switch(nodeName) {
    case 'Demographics':
      return [
        ['From', 'To', 'Weight', ],
        ['Visit List', 'Demographics', 5],
        ['Summary', 'Demographics', 2],
        ['Demographics', 'Find Patient', 3],
      ]
    case 'Visit List':
        return [
          ['From', 'To', 'Weight', ],
          ['Demographics', 'Visit List', 5],
        ]
    case 'Summary':
        return [
          ['From', 'To', 'Weight', ],
          ['Summary', 'Demographics', 2],
          ['Summary', 'Find Patient', 5]
        ]
    case 'Find Patient':
        return [
          ['From', 'To', 'Weight', ],
          ['Demographics', 'Find Patient', 3],
          ['Summary', 'Find Patient', 5]
        ]
    default:
      return []
  }
}

export function getResults(query) {
  if (query.length < 2) return []
  const results = [
    'Demographics',
    'Visit List',
    'Summary',
    'Find Patient'
  ];
  return results.filter(result => result.toLowerCase().includes(query.toLowerCase()))
}
import superagent from 'superagent'

const baseUrl = 'https://10.110.101.254/nodes'

const cycleSuffix = ' (cycle)'

function stripCycleSuffix(nodeName) {
  return nodeName.includes(cycleSuffix) ? nodeName.replace(cycleSuffix, '') : nodeName
}

function addCycleSuffix(nodeName) {
  return nodeName + cycleSuffix
}

class AppService {
  // placeholder
  static getPaths(nodeName) {
    return superagent
      .get(`${baseUrl}/${nodeName}/paths`)
      .then(res => JSON.parse(res.text))
      .catch(err => {
        console.log(err)
      })
  }

  static transformPaths(paths) {
    const transformed = [
      ['From', 'To', 'Count']
    ]
    const node = paths.node
    const usedNames = new Set(paths.previous.nodes.map(p => p.name))
    const previous = paths.previous.nodes.filter(p => p.name !== node.name).sort((a, b) => b.count - a.count).map(p => (
      [p.name, node.name, p.count]
    ))
    const next = paths.next.nodes.filter(n => n.name !== node.name).sort((a, b) => b.count - a.count).map(n => (
      [node.name, usedNames.has(n.name) ? addCycleSuffix(n.name) : n.name, n.count]
    ))
    return [...transformed, ...previous, ...next]
  }

  static getDataForNode(nodeName) {
    return this.getPaths(stripCycleSuffix(nodeName))
      .then(paths => this.transformPaths(paths))
  }

  static getResults(query) {
    if (query.length < 2) return []
    const results = [
      'Demographics',
      'Visit List',
      'Summary',
      'Find Patient'
    ];
    return results.filter(result => result.toLowerCase().includes(query.toLowerCase()))
  }
}

export default AppService

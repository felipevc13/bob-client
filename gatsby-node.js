const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const refeicoes = path.resolve(`./src/components/Refeicoes/index.js`);
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(
    `
      {
        allStrapiAlimentacao {
          edges {
            node {
              id
              quantidadeAlimento {
                id
                alimento {
                  id
                  categoria {
                    nome
                    limite
                  }
                  nome
                }
                quantidade
              }
              data
            }
          }
        }
        allStrapiAlimento {
          edges {
            node {
              categoria {
                nome
                limite
              }
              id
            }
          }
        }
        allStrapiCategoria {
          edges {
            node {
              id
              nome
              limite
              alimentos {
                id
                nome
                categoria
              }
              Icone {
                publicURL
                extension
              }
            }
          }
        }
      }
    `,
    { limit: 1000 },
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    const dates = result.data.allStrapiAlimentacao.edges.map(({ node }) => {
      return node.data;
    });

    createPage({
      // Path for this page — required
      path: '/',
      component: refeicoes,
      context: {
        eq: new Date(),
        todasDatas: dates,
      },
    });

    // Create blog post pages.
    result.data.allStrapiAlimentacao.edges.forEach((edge) => {
      createPage({
        // Path for this page — required
        path: `${edge.node.data}`,
        component: refeicoes,
        context: {
          eq: edge.node.data,
          todasDatas: dates,
        },
      });
    });
  });
};

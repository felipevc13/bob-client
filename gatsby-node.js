const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const refeicoes = path.resolve(`./src/components/Refeicoes/index.tsx`);
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(
    `
      {
        allStrapiAlimentacaoDiaria {
          edges {
            node {
              id
              quantidadeAlimento {
                alimento {
                  categoria
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
      }
    `,
    { limit: 1000 },
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    createPage({
      // Path for this page — required
      path: '/',
      component: refeicoes,
      context: {
        eq: new Date(),
      },
    });

    // Create blog post pages.
    result.data.allStrapiAlimentacaoDiaria.edges.forEach((edge) => {
      createPage({
        // Path for this page — required
        path: `${edge.node.data}`,
        component: refeicoes,
        context: {
          eq: edge.node.data,
        },
      });
    });
  });
};

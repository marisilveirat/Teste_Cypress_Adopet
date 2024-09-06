describe('Api Adopet', () => {
   const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMTk1OGE4YS1iYWQxLTRiMDItYjU0Ny03ODY5OWY4Zjg4MTMiLCJhZG9wdGVyTmFtZSI6IlNhcmFjdXJhIE1hcmlhIiwiaWF0IjoxNzE5MzYxNDA2LCJleHAiOjE3MTk2MjA2MDZ9.FZVFtxlnNMQ2iuN_C_XI9NmAhNA2cNHXmOVNYBcwIAs`
   // esse é o token da aplicação > aplication no editor do google > local storage

it('Mensagens do clientes aparecem na API', () => {
    cy.request({   //requisição do back
     method: 'GET' ,
     url: 'https://adopet-api-i8qu.onrender.com/mensagem/21958a8a-bad1-4b02-b547-78699f8f8813',
     headers: { authorization }

}).then((res) => {
    expect(res.status).to.be.equal(200) // voce pode experimentar a centena do status ou colocar ele, 2 tipos
    expect(res.body).is.not.empty
    expect(res.body).to.have.property('msg')
}) 
})
})

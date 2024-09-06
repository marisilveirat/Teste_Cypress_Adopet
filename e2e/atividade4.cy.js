
describe('Api Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMTk1OGE4YS1iYWQxLTRiMDItYjU0Ny03ODY5OWY4Zjg4MTMiLCJhZG9wdGVyTmFtZSI6IlNhcmFjdXJhIE1hcmlhIiwiaWF0IjoxNzE4NDc0OTY1LCJleHAiOjE3MTg3MzQxNjV9.PUW51np7VzOt2JnnUSyqNS3C4t0Okxq0EboieAFHANo`
      
            it('Nome do perfil', () => {
                cy.request({
                    method: 'GET' ,
                    url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/21958a8a-bad1-4b02-b547-78699f8f8813',
                    headers: { authorization }
                   
                }).then((res) => {
                    expect(res.status).to.be.equal(200)
                    expect(res.body).is.not.empty
                    expect(res.body).to.have.property('perfil')
                expect(res.body.perfil.nome).to.be.equal('Saracura Maria')
                                 
                })
            })
        })
  
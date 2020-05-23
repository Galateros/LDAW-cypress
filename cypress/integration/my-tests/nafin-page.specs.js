describe('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do', () => {
	describe('Page Loads', () =>{
		it('Should load page',() =>{
			cy.visit('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do')
		})
	})

	describe('Prueba de Datos', () =>{
		it('Ingresa Datos',() =>{
			cy.visit('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do')

			cy.get('#creditAmount').clear().type(20000);
			cy.get('#paymentMethod').select('1');
			cy.get('#period').select('2');
			cy.get('#rate').clear().type(15);
			cy.get('#fechaDisposicion').type('05/05/2020');
//			cy.contains('Calcular').click();
//			cy.contains('Ahora no').click();
//			cy.get('#resultadosSimulador').find('tr').should('have.length', 25)
			
			
			
			
		})
		it('Calcula Datos',() =>{
			cy.contains('Calcular').click();
			cy.contains('Ahora no').click();
			
			
			
			
		})
		it('Prueba por Columnas',()=>{
			cy.get('#resultadosSimulador').find('tr').should('have.length', 25)
		})
	})

})
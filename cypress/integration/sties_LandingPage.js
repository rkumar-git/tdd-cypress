//####################################################################
//Test related to Skinny Tiles Landing Page.
//Date: 23 March 2018
//Author: RameshKumar
//####################################################################

describe('Skinny Ties - Landing Page Test', function(){
		it('Visits the Skinny Test', function() {
		cy.visit('https://skinnyties.com')	
		
		// The url should include 'skinnyties.com'
		cy.url().should('include', 'skinnyties.com')
		
		// The Landing page should have a link for Registration.
		cy.contains('Register')
		
		cy.contains('Sign In')		
	})
})

describe('Skinny Ties - Test Mandatory Header values', function(){
	//Make sure that All the Header element is present in the page.
	it('Mandatory Langing page Test', function(){
		cy.get('input[id="search"]').should('have.value', '')
		cy.get('a').should('contain', 'Cart')		
		cy.get('h1').should('contain', 'Skinny Ties')		
		cy.get('a').should('contain', 'Collection')
		cy.get('a').should('contain', 'Color')
		cy.get('a').should('contain', 'Width')
		cy.get('a').should('contain', 'Fabric')
		cy.get('a').should('contain', 'Pattern')
	})
})

describe('Skinny Ties - Navigate to different ties from Home page', function(){
	//Verify whether the, individual id links are working as expected.
	it('Mandatory product navigation.', function(){
		cy.visit('https://skinnyties.com')
		   .wait(5000)
		//cy.get('a').should('contain', 'Black')
		cy.get('a')
		  .should('be.visible')
		  .and('contain', 'Black')
		cy.get('img[alt="Black Skinny Ties"]').click()
		cy.url().should('include', '/color/black/')
		
		//Blue Ties		
		cy.visit('https://skinnyties.com')
		cy.get('a').should('contain', 'Skinny Ties')	
		cy.get('a').should('contain', 'Blue')
		cy.get('img[alt="Blue Skinny Ties"]').click()
		cy.url().should('include', '/color/blue/')		
		
		/*
		//Collegiate
		cy.visit('https://skinnyties.com')
		cy.get('a').should('contain', 'Skinny Ties')	
		cy.get('a').should('contain', 'Collegiate')
		cy.get('a').should('have.value', 'collegiate').click()
		cy.url().should('include', '/collection/collegiate/')	
		
		//Cotton
		cy.visit('https://skinnyties.com');
		//cy.get('a').contains('Skinny Ties').click()		
		cy.get('a').should('contain', 'Cotton')
		cy.get('img[alt="Cotton Skinny Ties"]').click()
		cy.url().should('include', '/fabric/cotton/')	
		
		//Favourites
		cy.visit('https://skinnyties.com');
		//cy.get('a').contains('Skinny Ties').click()		
		cy.get('a').should('contain', 'Favourites')
		cy.get('img[alt="Favourites Skinny Ties"]').click()
		cy.url().should('include', '/color/Favourites/')	
		
		//Graphics
		cy.visit('https://skinnyties.com');
		//cy.get('a').contains('Skinny Ties').click()		

		cy.get('a').should('contain', 'Graphics')
		cy.get('img[alt="Graphics Skinny Ties"]').click()
		cy.url().should('include', '/pattern/graphic/')	
		
		//Plaid
		cy.visit('https://skinnyties.com');
		//cy.get('a').contains('Skinny Ties').click()		
		cy.get('a').should('contain', 'Plaid')
		cy.get('img[alt="Plaid Skinny Ties"]').click()
		cy.url().should('include', '/pattern/plaid/')	
		
		//Silk
		cy.get('a').contains('Skinny Ties').click()		
		cy.get('a').should('contain', 'Skinny Ties')	
		cy.get('a').should('contain', 'Silk')
		cy.get('img[alt="Silk Skinny Ties"]').click()
		cy.url().should('include', '/fabric/silk/')	
		
		//Striped
		cy.visit('https://skinnyties.com');
		cy.get('a').contains('Skinny Ties').click()		
		cy.get('a').should('contain', 'Striped')
		cy.get('img[alt="Striped Skinny Ties"]').click()
		cy.url().should('include', '/pattern/striped/')	
		*/
	})
})

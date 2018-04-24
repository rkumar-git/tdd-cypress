//####################################################################
//Test related to Skinny Tiles Landing Page.
//Date: 26 March 2018
//Author: RameshKumar
//####################################################################
describe('Skinny Ties - Login Test', function(){
		it('Verify LoginPage', function() {
		cy.visit('https://skinnyties.com')	
		
		//The url should include 'skinnyties.com'
		cy.url().should('include', 'skinnyties.com')
		
		//The landing page should have Sign In value
		cy.contains('Sign In').click()
		
		//Account loging url should have "/login/
		cy.url().should('include', '/customer/account/login/')
		
		//Login page should have a SignIn header.
		cy.get('h1').should('contain', 'Sign In')
		
		//Verity Login page should have email field.
		cy.get('#email').should('have.value', '')
		  .type('email')
		
		//Verity Login page should have Password field.
		cy.get('#pass').should('have.value', '')
		  .type('password')
		
		//Verify SignIn button present in the page
		cy.get('button').should('contain','Sign In')
		
		//Verify Forget password present in the page.
		cy.get('a').should('contain','Forgot password?')
		
		//Verify Register button is there.
		cy.get('a').should('contain','Register')
	})
})

describe('Skinny Ties - Invalid Login Test', function(){
		it('Invalid Login Test - Scenario: Invalid Email', function() {
		cy.visit('https://skinnyties.com')	
		
		//The url should include 'skinnyties.com'
		cy.url().should('include', 'skinnyties.com')
		cy.contains('Sign In').click()
		cy.url().should('include', '/customer/account/login/')
		cy.get('h1').should('contain', 'Sign In')
		//=====================================================
		cy.get('#email').should('have.value', '')
		  .type('email@email.1233')
		  
		cy.get('#pass').should('have.value', '')
		  .type('password')
		
		cy.get('button').contains('Sign In').click()
		
		//Verify the invalid email message.
		cy.get('#advice-validate-email-email').should('contain','Please enter a valid email address');
	})
})

describe('Skinny Ties - Invalid Login Test', function(){
		it('Invalid Login Test - Scenario: Invalid Email and password', function() {
		cy.visit('https://skinnyties.com')	
		
		//The url should include 'skinnyties.com'
		cy.url().should('include', 'skinnyties.com')
		cy.contains('Sign In').click()
		cy.url().should('include', '/customer/account/login/')
		cy.get('h1').should('contain', 'Sign In')
		//=====================================================
		cy.get('#email').should('have.value', '')
		  .type('rkumarcdev@gmail.com')
		  
		cy.get('#pass').should('have.value', '')
		  .type('rkmk@st_1233')
		
		cy.get('button').contains('Sign In').click()
		
		//Verify the invalid email message.
		cy.get('span').should('contain','Invalid login or password.');
	})
})

describe('Skinny Ties - Valid Login Test', function(){
		it('Login Test with Valid Email and password', function() {
		cy.visit('https://skinnyties.com')	
		
		//The url should include 'skinnyties.com'
		cy.url().should('include', 'skinnyties.com')
		cy.contains('Sign In').click()
		cy.url().should('include', '/customer/account/login/')
		cy.get('h1').should('contain', 'Sign In')
		//=====================================================
		cy.get('#email').should('have.value', '')
		  .type('rkumarcdev@gmail.com')
		  
		cy.get('#pass').should('have.value', '')
		  .type('rkmk@st_1')
		
		cy.get('button').contains('Sign In').click()
		
		//Verify the invalid email message.
		cy.get('h1').should('contain','Account Overview');
		
		// Sign out from the Account Overview page
		cy.get('a').contains("Sign Out").click()
		
		//Verify SignOut page
		cy.get('h1').should('contain','Signed Out');
		
	})
})
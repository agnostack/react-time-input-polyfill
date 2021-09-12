import { a11yHasExpectedHtml, a11yInitialHtml, hasReturnVal, loadTestPage, use } from "../../support"

export const otherManualEntryTests = () => {
	describe('other manual entry tests', () => {
		it('08:30 PM >> [ 1 > < 2 ] >> 02:30 PM', () => {
			loadTestPage({ segment: 'hrs12' })
				.type('1')
				.then(hasReturnVal(`13:30`))
				.then(a11yHasExpectedHtml('<p>1.</p>'))
				.then(use.rightArrow)
				.then(a11yHasExpectedHtml(a11yInitialHtml().minutes))
				.then(use.leftArrow)
				.then(a11yHasExpectedHtml(a11yInitialHtml(1).hrs12))
				.type('2')
				.should('have.value', '02:30 PM')
				.then(a11yHasExpectedHtml(a11yInitialHtml().minutes))
				.then(hasReturnVal(`14:30`))
		})
		it('08:30 PM >> [ > 1 > < 2 ] >> 08:02 PM', () => {
			loadTestPage({ segment: 'hrs12' })
				.then(use.rightArrow)
				.then(a11yHasExpectedHtml(a11yInitialHtml().minutes))
				.type('1')
				.then(hasReturnVal(`20:01`))
				.then(a11yHasExpectedHtml('<p>1.</p>'))
				.then(use.rightArrow)
				.then(a11yHasExpectedHtml(a11yInitialHtml().mode))
				.then(use.leftArrow)
				.then(a11yHasExpectedHtml(a11yInitialHtml(1).minutes))
				.type('2')
				.should('have.value', '08:02 PM')
				.then(a11yHasExpectedHtml('<p>2.</p>'))
				.then(hasReturnVal(`20:02`))
		})
		it('08:30 PM >> [ > > AM ] >> 08:30 AM', () => {
			loadTestPage({ segment: 'hrs12' })
				.then(use.rightArrow)
				.then(use.rightArrow)
				.then(a11yHasExpectedHtml(a11yInitialHtml().mode))
				.type('AM')
				.should('have.value', '08:30 AM')
				.then(a11yHasExpectedHtml('<p>AM.</p>'))
				.then(hasReturnVal(`08:30`))
		})
		it('08:30 PM >> [ > > AM PM ] >> 08:30 AM', () => {
			loadTestPage({ segment: 'hrs12' })
				.type('{rightarrow}{rightarrow}ampm')
				.should('have.value', '08:30 PM')
				.then(a11yHasExpectedHtml('<p>PM.</p>'))
				.then(hasReturnVal(`20:30`))
		})

		// TODO: type > blur > focus > type should forget the first time you typed
	})
}
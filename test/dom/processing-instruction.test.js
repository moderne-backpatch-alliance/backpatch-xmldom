'use strict'

const { DOMParser } = require('../../lib')
const { MIME_TYPE } = require('../../lib/conventions')

describe('ProcessingInstruction', () => {
	test('createProcessingInstruction accepts any target or data without throwing', () => {
		const doc = new DOMParser().parseFromString('<xml/>', MIME_TYPE.XML_TEXT)
		expect(() =>
			doc.createProcessingInstruction('ns:bad', 'data')
		).not.toThrow()
		expect(() => doc.createProcessingInstruction('xml', '?>')).not.toThrow()
		expect(() =>
			doc.createProcessingInstruction('foo', 'inject?>evil')
		).not.toThrow()
	})
})

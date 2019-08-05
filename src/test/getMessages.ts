import { getMessage } from '../common/getMessage'

export function testGetMessage(): void {
    console.log(getMessage(new Error('[TBD choose a test framework]')))
}

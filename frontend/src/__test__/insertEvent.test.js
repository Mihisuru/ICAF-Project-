import React from 'react';
import {shallow} from 'enzyme';
import InsertEvent from '../components/dashboard/editor/InsertEvent'
describe('InsertEvent Component', () => {
    it('should render without throwing an error', () => {
        expect(shallow(<InsertEvent />).find('form.insertEvent').exists()).toBe(true)
    })
})

describe('Event Name input', () => {
    it('should respond to change event and change the state of the InsertEvent Component', () => {
        const wrapper = shallow(<InsertEvent/>);
        wrapper.find('#ename').simulate('change', {
            target: {
                name: 'ename', value:
                    'Registration'
            }
        });
        expect(wrapper.state('ename')).toEqual('Registration');
    })
})
    describe('Event Due input', () => {
        it('should respond to change event and change the state of the InsertEvent Component', () => {
            const wrapper = shallow(<InsertEvent/>);
            wrapper.find('#edue').simulate('change', {
                target: {
                    name: 'edue', value:
                        '20th March'
                }
            });
            expect(wrapper.state('edue')).toEqual('20th March');
        })
    })

describe('Event Description input', () => {
    it('should respond to change event and change the state of the InsertEvent Component', () => {
        const wrapper = shallow(<InsertEvent/>);
        wrapper.find('#edes').simulate('change', {
            target: {
                name: 'edes', value:
                    'Registrations are open'
            }
        });
        expect(wrapper.state('edes')).toEqual('edes');
    })
})

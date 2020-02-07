const googleSearch = require('./index');

mokDb = [
    'ali.com',
    'rally.com',
    'dog.com',
    'alidan.com',
    'mamba.com',
    'car.com'
]


describe('____________Seraching engline test', ()=>{

    it('sylly test', ()=>{
        expect('aki').toBe('aki')
    });
     
    it('google Search Test', ()=>{
        expect(googleSearch('loldad',mokDb)).toEqual([]);
        expect(googleSearch('ali',mokDb)).toEqual([ 'ali.com', 'alidan.com'])
    })
    
    
    it('test with undefined and null input', ()=>{
        expect(googleSearch(undefined, mokDb)).toEqual([]);
        expect(googleSearch(null,mokDb)).toEqual([])
    })
    
    it('does not return more than 3 matches', ()=>{
        expect(googleSearch('.co', mokDb).length).toEqual(3)
    })
})

let baseUrl = ''

if(process.env.NODE_ENV === 'development'){
    baseUrl = 'http://localhost:8000/backend/api/'
} else {
    baseUrl = 'https://motion-alex.propulsion-learn.ch/backend/api/'
}
console.log(baseUrl)
export default baseUrl
export default function(params) {

    function getCount() {
        return localStorage.getItem("count") || 0;;
    }

    return (
        <div>
            <p>Hola mundo</p>
        </div>
    )
}

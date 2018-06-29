
const DEFAULT_OPTIONS = {

    test: true
};

function RestEndpoint() {

    function get() {

    }

    function list() {

    }

    function create() {

    }

    function update() {

    }

    function remove() {

    }

    function handleRESTrequest(request, response, next) {
        console.log("\tREST request handler");
    }

    return {
        requestHandler: handleRESTrequest
    }
}

export default RestEndpoint;
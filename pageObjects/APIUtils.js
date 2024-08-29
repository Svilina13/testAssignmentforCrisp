class APIUtils {
    constructor(apiContext, payload, url){
        this.apiContext = apiContext;
        this.payload = payload;
        this.url = url;
    }

    async getCall(){
        const response = await this.apiContext.get(this.url, {data: this.payload} )
        return response;
    }

}

module.exports = {APIUtils};
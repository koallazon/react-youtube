class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient
  }

  async mostPopular() {
    try {
      const response = await this.youtube.get("videos", {
        params: {
          part: "snippet",
          chart: "mostPopular",
          maxResults: 25,
        },
      })
      console.log(response)
      return response.data.items
    } catch (error) {
      return console.log("error", error)
    }
  }

  async search(query) {
    try {
      const response = await this.youtube.get("search", {
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: query,
        },
      })
      return response.data.items.map((item) => ({
        ...item,
        id: item.id.videoId,
      }))
    } catch (error) {
      return console.log("error", error)
    }
  }
}

export default Youtube

export const request = async ({path, method = "GET", body}) => {
    const url = `https://tiktok-video-no-watermark2.p.rapidapi.com/${path}`;
    const options = {
        method,
        headers: {
            'X-RapidAPI-Key': '05ccdd424cmsh7a7da785017aa32p13fdf8jsnaf52a87722a6',
            'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com'
        }
    };

    if(body) options.body = body;
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();

        return(result);
    } catch (error) {
        console.error(error);
    }
}

export const formatCompactNum = (num) => {
    const formater = Intl.NumberFormat('en', {
        notation: 'compact'
    })
    return formater.format(num)
}
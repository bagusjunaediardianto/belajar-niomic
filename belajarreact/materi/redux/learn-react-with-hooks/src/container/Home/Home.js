import React, { Component } from 'react'
import YoutubeComp from '../../component/YoutubeComp/YouTubeComp'

class Home extends Component {
    render() {
        return (
            <div>
                <p>Youtube Component</p>
                <hr />
                <YoutubeComp
                    link="https://corporate.dominos.co.uk/Media/Default/Image%20Library/Image%20library%20-%20logos/RGB_White_Type_Tile_Only.png"
                    time="07.12"
                    title="Dominos Pizza - Karanganyar"
                    desc="500x ditonton, 7 bulan lalu"
                />
                <YoutubeComp
                    link="https://corporate.dominos.co.uk/Media/Default/Image%20Library/Image%20library%20-%20logos/RGB_White_Type_Tile_Only.png"
                    time="03.43"
                    title="Dominos Pizza - Mas Mansyur"
                    desc="175kx ditonton, 3 tahun lalu"
                />
                <YoutubeComp
                    link="https://corporate.dominos.co.uk/Media/Default/Image%20Library/Image%20library%20-%20logos/RGB_White_Type_Tile_Only.png"
                    time="02.55"
                    title="Dominos Pizza - Seturan Jogja"
                    desc="243kx ditonton, 5 tahun lalu"
                />
                <YoutubeComp
                    link="https://corporate.dominos.co.uk/Media/Default/Image%20Library/Image%20library%20-%20logos/RGB_White_Type_Tile_Only.png"
                    time="05.31"
                    title="Dominos Pizza - Manyar Surabaya"
                    desc="243kx ditonton, 5 tahun lalu"
                />
                <YoutubeComp
                    link="https://corporate.dominos.co.uk/Media/Default/Image%20Library/Image%20library%20-%20logos/RGB_White_Type_Tile_Only.png"
                    time="07.21"
                    title="Dominos Pizza - Dinoyo Malang"
                    desc="243kx ditonton, 5 tahun lalu"
                />
            </div>
        )
    }
}

export default Home
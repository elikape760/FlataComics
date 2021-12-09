import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardLayout = ({comic,}) => (
    

    <Card>
        <Image src={comic.image} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{comic.title}</Card.Header>
            <Card.Meta> Year Published: {comic.year_published}</Card.Meta>
            <Card.Description>
                {comic.super_hero}<br />
               Price: ${comic.price} <br />
               Publisher: {comic.publisher}
            </Card.Description>

            
        </Card.Content>
        <Card.Content extra>
            
            <a>
                <Icon name='user' />
                {comic.seller_id}
            </a>
            

        </Card.Content>
    </Card>
)

export default CardLayout
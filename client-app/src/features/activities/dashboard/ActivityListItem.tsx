import { Link } from 'react-router-dom';
import { Button, Icon, Item, ItemContent, ItemHeader, ItemImage, Segment, SegmentGroup } from "semantic-ui-react";
import { Activity } from '../../../app/models/activity';

interface Props {
    activity: Activity
}

export default function ActivityListItem({activity}: Props) {
    return (
        <SegmentGroup>
            <Segment>
                <Item.Group>
                    <Item>
                        <ItemImage size="mini" circular src="assets/user.png" />
                        <ItemContent>
                            <ItemHeader as={Link} to={`/activities/${activity.id}`}>
                                {activity.title}
                            </ItemHeader>
                            <Item.Description>Hosted By XX</Item.Description>
                        </ItemContent>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {activity.date}
                    <Icon name='marker' /> {activity.venue}
                </span>
            </Segment>
            <Segment secondary>
                Atttendes go here
            </Segment>
            <Segment clearing>
                <span>{activity.description}</span>
                <Button 
                    as={Link} 
                    to={`/activities/${activity.id}`} 
                    color='teal'
                    floated='right'
                    content='View'    
                />
            </Segment>
        </SegmentGroup>
    )
}
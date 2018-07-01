import React from 'react';
import { Badge } from 'reactstrap';

export const Repositories = props => {
       
    return (
        <div>
            <h2>Users Repos</h2>
            {props.reposData.map(repo => <Badge key={repo.id} href={repo.htmlUrl} target='_blank' color="info"><h3>{repo.name}</h3></Badge>)}
        </div>
    )
};
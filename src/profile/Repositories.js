import React from 'react';
// TODO ne znam da li treba div i da li bih koristi fragments ovde
export const Repositories = props => {
    return (
        <div>
            <h2>Users Repos</h2>
            {props.reposData.map(repo => <a key={repo.id} href={repo.htmlUrl} target='_blank'><h3>{repo.name}</h3></a>)}
        </div>
    )
};
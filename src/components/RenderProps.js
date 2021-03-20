import React from 'react';

function RenderProps(props) {
    return (
        <div>
            {this.props.name()}
        </div>
    );
}

export default RenderProps;
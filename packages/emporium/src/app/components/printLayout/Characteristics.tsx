import { chars } from '@emporium/data-lists';
import * as images from '@emporium/images';
import { characteristics } from '@emporium/selectors';
import React from 'react';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';

class Component extends React.Component<any> {
    public render(): React.ReactNode {
        const { characteristics, theme } = this.props;
        return (
            <div>
                <Row className="justify-content-end">
                    <div className={`header header-${theme}`}>
                        CHARACTERISTICS
                    </div>
                </Row>
                <hr />
                <Row className="justify-content-center">
                    {chars.map(stat => (
                        <div
                            className={`imageBox characteristic characteristic-${stat}`}
                            key={stat}
                        >
                            <img
                                src={images[theme][stat]}
                                alt=""
                                className="svg"
                            />
                            <Row
                                className={`characteristicValue characteristicValue-${theme}`}
                            >
                                {characteristics[stat]}
                            </Row>
                        </div>
                    ))}
                </Row>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        characteristics: characteristics(state),
        theme: state.theme
    };
};

export const Characteristics = connect(mapStateToProps)(Component);

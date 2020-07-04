import * as images from '@emporium/images';
import { totalXP, usedXP } from '@emporium/selectors';
import React from 'react';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';

class Component extends React.Component<any> {
    public render(): React.ReactNode {
        const { totalXP, usedXP, theme } = this.props;
        return (
            <div className="break-after">
                <Row className="justify-content-between">
                    <div className={`imageBox xpBox totalXp`}>
                        <img
                            src={images[theme].TotalXp}
                            alt=""
                            className="svg"
                        />
                        <Row className={`xpValue xpValue-${theme}`}>
                            {totalXP}
                        </Row>
                    </div>

                    <div className={`imageBox xpBox availableXP availableXP`}>
                        <img
                            src={images[theme].AvailableXp}
                            alt=""
                            className="svg"
                        />
                        <Row className={`xpValue xpValue-${theme}`}>
                            {totalXP - usedXP}
                        </Row>
                    </div>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        totalXP: totalXP(state),
        usedXP: usedXP(state),
        theme: state.theme
    };
};

export const XP = connect(mapStateToProps)(Component);

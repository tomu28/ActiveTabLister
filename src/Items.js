/*global chrome*/
import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import noimage from './noimage.png';
import Typography from '@material-ui/core/Typography';
import {Box} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import AdaptingStyledComponents from "./AdaptingStyledComponents";

function getAllOpenWindows(winData, that){
    const tabs = [];
    for(let i in winData) {
        if (winData[i].focused === true) {
            const winTabs = winData[i].tabs;
            const totTabs = winTabs.length;
            for (let j=0; j < totTabs; j++){
                tabs.push(winTabs[j]);
            }
        }
    }
    that.setState({count: tabs.length});
    that.setState({tabs: tabs});
}

class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            tabs: [],
            showQr: false,
        };
    }

    handleQr() {
        this.setState({showQr: true})
    };

    leaveQr() {
        this.setState({showQr: false})
    };

    componentDidMount() {
        chrome.windows.getAll({populate:true},(winData) => {getAllOpenWindows(winData, this)});
    };

    // Stateの値が変わるたび、更新する
    // shouldComponentUpdate(nextProps, nextState) {
    //     return !(this.state.count === nextState.count &&
    //         this.props.sampleProp === this.props.SampleProp);
    // }

    render() {

        return(
            <div>
                <Typography variant="h5" color="textSecondary">
                    開いているタブの数：{this.state.count}
                </Typography>

                <Grid container
                      dirction="row"
                      justify="flex-start"
                      alignItems="flex-start"
                >
                    {this.state.tabs.map(tab => (
                        <Grid item xs={12} key={tab.id}>
                            <br/>
                            <Paper>
                                <img src={tab.favIconUrl}
                                    width="36"
                                    height="36"
                                    alt="favIcon"
                                    onError={(e) => e.target.src = noimage}
                                />

                                <Button color="secondary">
                                    <Typography variant="title" color="inherit" noWrap="true">
                                        <a
                                            onClick={() => chrome.tabs.create({url: tab.url}, tab => {})}
                                            href={tab.url}>
                                            {tab.title}
                                        </a>
                                    </Typography>
                                </Button>

                                <Box justifyContent="flex-end">
                                    <AdaptingStyledComponents
                                        value={{Red: tab.id,
                                        Blue:tab.url,
                                        Qr: this.state.showQr,
                                        mouseOverHandling: () => {this.handleQr()},
                                        mouseOutHandling: () => {this.leaveQr()}}}
                                    />
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                <br/>

                <Typography variant="title" color="inherit" noWrap="true">
                    <ui>
                        <div><span class="margin">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span></div>
                    </ui>
                </Typography>

            </div>
        );//TODO 文字合わせ
    }
}

export default Items;

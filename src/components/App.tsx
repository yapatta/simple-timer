import React, {FC} from 'react';
import {Button, Icon, Card, Statistic} from 'semantic-ui-react';

interface AppProps {
  timeLeft: number;
  isCounting: boolean;
  reset: () => void;
  start: () => void;
  stop: () => void;
}

const Timer: FC<AppProps> = ({
  timeLeft = 60,
  isCounting = false,
  reset = () => {},
  start = () => {},
  stop = () => {},
}) => {
  return (
    <div className="container">
      <header>
        <h1>タイマー</h1>
      </header>
      <Card>
        <Statistic className="number-board">
          <Statistic.Label>time</Statistic.Label>
          <Statistic.Value>{timeLeft}</Statistic.Value>
        </Statistic>
        <Card.Content>
          <div className="ui two buttons">
            <Button color="red" onClick={reset}>
              <Icon name="redo" />
              リセット
            </Button>
            <Button color="green" onClick={isCounting ? stop : start}>
              {isCounting ? 'ストップ' : 'スタート'}
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Timer;

import React from 'react';

interface Props {
  text: string;
  maxLength: number;
  showMoreText: string;
}

interface State {
  truncated: boolean;
}

export default class ReadMore extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      truncated: true,
    };
  }

  render() {
    const { text, maxLength, showMoreText } = this.props;
    const { truncated } = this.state;

    if (text.length <= maxLength) {
      return <p>{text}</p>;
    }

    const displayedText = truncated ? `${text.slice(0, maxLength)}` : text;

    return (
      <p onClick={() => this.setState({ truncated: !truncated })}>
        {displayedText}
        <span style={{ color: 'blue', cursor: 'pointer' }}>
          {truncated ? ` ${showMoreText}` : ' Show less'}
        </span>
      </p>
    );
  }
}

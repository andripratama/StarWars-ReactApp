var data = [
    {content: "Beli Telur", tag: "belanja"},
    {content: "Tugas Javascript", tag: "kuliah"},
    {content: "This War of Mine", tag: "game"},
    {content: "Doraemon", tag: "film"}
];

var List = React.createClass({
    render: function () {
        var listData = this.props.data.map(function (data) {
            return (
                <li>{data.content}, tag: {data.tag}</li>
            );
        });

        return (
            <ul className="list">
                {listData}
            </ul>
        );
    }
});
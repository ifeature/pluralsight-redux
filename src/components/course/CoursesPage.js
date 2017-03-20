import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import CourseList from './CourseList';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }
    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }
    render() {
        const { courses } = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <input
                    type="submit"
                    value="Add Course"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage}
                />
                <CourseList courses={courses} />
            </div>
        );
    }
}

CoursesPage.propTypes = {
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
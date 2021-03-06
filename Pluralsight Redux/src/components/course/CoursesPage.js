import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';

class CoursePage extends React.Component {
    
    constructor(props, context) {
        super(props, context);
        this.state = {
          course: { title: ""}  
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }
    
    onTitleChange(event){
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course:course});
    }
    
    onClickSave(){
        //this.props.dispatch(courseActions.createCourse(this.state.course));
        this.props.actions.createCourse(this.state.course);
    }
    
    courseRow(course,index){
        return <div key={index}> {course.title} </div>;
    }

    render() {
        debugger;

        const {courses} = this.props;

        return (
            <div>
                <h1>Courses</h1> 
                <CourseList courses={courses}/>
                
                <h2>Add Course</h2>
                <input
                    type="text"
                    value={this.state.course.title}
                    onChange={this.onTitleChange}/>
          
                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave}/>
      
            </div>
        );
    }
}


CoursePage.propTypes = {
  //dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
    debugger;
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch){
    debugger;
    return {
        //createCourse: course => dispatch(courseActions.createCourse(course))
        actions: bindActionCreators(courseActions, dispatch) 
    }
}

//mapDispatchToProps injected automatically by connect
export default connect(mapStateToProps,mapDispatchToProps)(CoursePage);
// import stuff
import React from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';

// // create stuff
// export default function App() {

	

//   return (
//     <View style={styles.viewStyle}>
//       <Text>Hello world!</Text>
//       <TextInput 
//       	style={styles.inputStyle}
//       	onChangeText={(text)=>this.setState({todo:text})}
//       />
//       <Button
//       	title="Add Todo"
//       />
//       <Text>{this.state.todo}</Text>
//     </View>
//   );
// }


export default class App extends React.Component {
	state = {
		text: "",
		todo: []
	}

	addTodo = () => {
		//this.setState({todo: this.state.text});
		var newTodo = this.state.text;
		var arr = this.state.todo;
		arr.push(newTodo);

		this.setState({todo: arr, text:""})
	}

	deleteTodo = (t) => {
		var arr = this.state.todo;
		var pos = arr.indexOf(t);

		arr.splice(pos,1);
		
		this.setState({todo: arr});

	}

	renderTodos = () => {
		return this.state.todo.map(t=>{
			return (

				<TouchableOpacity key={t}>
					<Text 
						onPress={() => this.deleteTodo(t)} 
						style={styles.todo}
					>{t}</Text>

				</TouchableOpacity>

				
				)
		});
	}

  render() {
    return (
    <View style={styles.wholeStyle}>
	    <View style={styles.viewStyle}>
	      <Text style={styles.header}>Todo App!</Text>
	      <TextInput 
	      	style={styles.inputStyle}
	      	onChangeText={(text)=>this.setState({text})}
	      	value={this.state.text}
	      />
	      <Button
	      	title="Add Todo"
	      	onPress={this.addTodo}
	      	color="white"
	      />

	      <View style={{marginTop:50}}/>
	      {this.renderTodos()}
	    </View>
    </View>
  );
  }
}


const styles = {
	viewStyle: 
	{
		// flex:1, 
		alignItems:'center', 
		justifyContent:'center',
		margin: 10,
		marginTop: 45,
		
	},
	todo:{
		fontSize: 30,
		color: "white",
	},
	wholeStyle:{
		backgroundColor: "#0288D1",
		flex:1,
	},
	inputStyle:{
		height: 40,
		width: 350,
		borderColor: "white",
		borderWidth: 1,
	},
	header:{
		fontSize: 30,
		fontWeight: "bold",
		color: "white",
	},

}




// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Testing</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



import{StyleSheet} from  'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    fontSize: 18,
    padding: 8,
    textAlign: 'center',
  },
  input:{
    backgroundColor: 'white',
    orderColor: 'black',
    marginBottom: 10,
    borderWidth: 2,
  },
  button:{
    
  },
  titulo:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 36,
  },
  aviso:{
    color: 'red',
    fontSize: 10,
    paddingBottom: 4,
    textAlign: 'center',
  },
    card:{  
    marginTop: 20,
    backgroundColor: '#FFF',
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 15,
    padding: 15,
    borderWidth: 1, //add borda
    borderColor: '#ddd',
    elevation: 40, //sombra
    shadowOpacity: 0.1,
     shadowRadius: 4,
     shadowOffset: { //modifica a direção da sombra
      width: 4,
      height: 2,
    },
  },

  cardTitle:{
    fontSize: 18,
    marginBottom: 8,
    fontWeight: 'bold',
  },

  cardText:{
    fontSize: 13,
    color: '#555',
    marginBottom: 10,
    textAlign: 'justify'
  },

  cardUser:{
    fontWeight: 500,
    fontSize: 13,
  },

  cardDate:{
    color: '#777',
    marginTop: 2,
    marginBottom: 10,
    fontSize: 12,
  },

  cardPrice:{
    fontSize: 20,
    fontWeight: '660',
    color: '#2E7D32',
  },

  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
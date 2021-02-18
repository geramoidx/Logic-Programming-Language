// Symbol Table for Compiler Syntax Analysis

const _SYMBOLS_ = {
  _USER_NAMES_: ['PI'],
  _ITERATIONS_: [
    
  ],
  _CONDITIONALS_: [
   
  ],
  _VARIABLES_: [
    
  ],
  _ASSIGNMENTS_: [

  ]
};

const UserDefinitions = (definition) => {
    _SYMBOLS_['_USER_NAMES_'].push(definition);
}

module.exports = { 
    iterations_regexp: _SYMBOLS_['_ITERATIONS_'],
    assignments_regexp : _SYMBOLS_['_ASSIGNMENTS_'],
    conditionals_regexp : _SYMBOLS_['_CONDITIONALS_'],
    functions_regexp: _SYMBOLS_['_FUNCTIONS_'],
    variables_regexp : _SYMBOLS_['_VARIABLES_'],
    user_definitions : UserDefinitions,
    user_ids : _SYMBOLS_['_USER_NAMES_']
}

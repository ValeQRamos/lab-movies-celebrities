const {Schema, model} =  require('mongooose')

const celebritySchema = new Schema({ name:String, occupation:String, catchPhrase:String });

module.exports = model('Celebrity', celebritySchema);
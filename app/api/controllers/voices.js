const voiceModel = require('../models/voices');

module.exports = {
    getById: function(req, res, next) {
        console.log(req.body);
        voiceModel.findById(req.params.voiceId, function(err, voiceInfo) {
            if( err) {
                next(err);
            }else {
                res.json({
                    status: 'success',
                    message: 'Movie found!',
                    data: {
                        voices: voiceInfo
                    }
                });
            }
        });
    },

    getAll: function(req, res, next) {
        let voiceList = [];

        voiceModel.find({}, function(err, voices) {
            if( err) {
                next(err);
            } else {
                for( let voice of voices ) {
                    voiceList.push({id: voice._id, text: voice.text, created_at: voice.created_at});
                }

                res.json({
                    status: 'success',
                    message: 'Movie list found!',
                    data: {
                        voices: voiceList
                    }
                });
            }
        });
    },

    updateById: function(req, res, next) {
        voiceModel.findByIdAndUpdate(req.params.voiceId, {name: req.body.name}, function(err, voiceInfo) {
            if (err)
                next(err);
            else {
                res.json({
                    status: 'success',
                    message: 'Voice data updated',
                    data: null
                });
            }
        });
    },

    deleteById: function(req, res, next) {
        voiceModel.findByIdAndRemove(req.params.voiceId, function(err, voiceInfo) {
            if (err)
                next(err);
            else {
                res.json({
                    status: 'success',
                    message: 'Voice data deleted',
                    data: null
                });
            }
        });
    },

    create: function(req, res, next) {
        voiceModel.create({
            text: req.body.text, created_at: req.body.created_at
        }, function(err, result) {
            if (err)
                next(err);
            else {
                res.json({
                    status: 'success',
                    message: 'Voice data created',
                    data: null
                });
            }
        });
    }
}
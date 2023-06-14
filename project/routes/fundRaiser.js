const express = require('express');
const router = express.Router();
const fundRaiserService = require('../services/fundRaiserService');

// const fundRaiseres = [{ id: "1", firstname: "TLV",lastname:"ikkuj",phone:"89796", groupId: 3,goal:222},{ id: "1", firstname: "TLV",lastname:"ikkuj",phone:"89796", groupId: 3,goal:222}]
//get all
router.get('/', async(req, res) => {
    res.json(await fundRaiserService.getFundRaiser());
})
router.get('/:fundRaiserId', async(req, res) => {
    res.json(await fundRaiserService.getFundRaiserById());
})

router.post('/',  async(req, res) => {
    await fundRaiserService.createFundRaiser(req.body);
    res.json('item added succesfully');
})

router.put('/:fundRaiserId',  async(req, res) => {
    await fundRaiserService.updateFundRaiser(req.body);
    res.json('item updated succesfully');
})

router.delete('/:fundRaiserId', async(req, res) => {
    await fundRaiserService.deleteFundRaiser(req.params.fundRaiserId);
    res.end('deleted' + req.params.fundRaiserId);
    
})



module.exports = router;
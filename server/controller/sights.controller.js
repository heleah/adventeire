import mongoose from "mongoose";
import sight from "../models/sights.model.js";

function getSights(req, res) {
  sight
    .find()
    .then((sights) => res.json(sights))
    .catch((error) =>
      res.json({ success: false, message: "Could not retrieve sights" })
    );
}

function getSight(req, res) {
  const { sightId } = req.params;
  sight
    .findById(sightId)
    .then((sight) => res.json(sight))
    .catch((error) =>
      res.json({ success: false, message: "400: sight not found" })
    );
}

function postSight(req, res) {
  const newSight = new sight({
    name: req.body.name,
    address: req.body.address,
    county: req.body.county,
    description: req.body.description,
    ticket: req.body.ticket,
    website: req.body.website,
    imgUrl: req.body.imgUrl,
    coordinates: req.body.coordinates,
  });
  newSight
    .save()
    .then((savedSight) => res.json(savedSight))
    .catch((error) =>
      res.json({ success: false, message: "Could not save sight to database" })
    );
}

function updateSight(req, res) {
  const { sightId } = req.params;
  const updatedSight = req.body;
  sight.findByIdAndUpdate({ _id: sightId }, updatedSight, (error, doc) => {
    if (error) {
      res.json({ success: false, message: "Could not update this sight." });
      return;
    }
    res.json(doc);
  });
}

function deleteSight(req, res) {
  const { sightId } = req.params;
  sight.findByIdAndDelete({ _id: sightId }, (error, doc) => {
    if (error) {
      res.json({ success: false, message: "Could not delete this sight." });
      return;
    }
    res.json({
      success: true,
      message: `Sight ${doc.name} has been deleted`,
      data: doc,
    });
  });
}

export { getSights, getSight, postSight, updateSight, deleteSight };

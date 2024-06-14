import { Request, Response } from 'express';
import * as commentService from '../services/commentService';

export const getAllComments = async (req: Request, res: Response) => {
  const comments = await commentService.getAllComments();
  res.json(comments);
};

export const createComment = async (req: Request, res: Response) => {
  const { content, postId, userId } = req.body;
  const comment = await commentService.createComment(content, postId, userId);
  res.json(comment);
};
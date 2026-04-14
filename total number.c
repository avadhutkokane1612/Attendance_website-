int countNode(stuct node*root)
{
    int count;
    if (root==NULL)
    return 0;
    else
    count=1+countNodes(root->left)+countNodes(root->right);
    return count;
}